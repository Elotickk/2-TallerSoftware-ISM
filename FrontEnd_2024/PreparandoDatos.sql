


	Use RentasCUFinal

	/* (1ro) Creamos una tabla temporal para guardar las salidas */

		Begin Try
			Drop Table #Salidas
		End Try
		Begin Catch
			Print 'Tabla Eliminada'
		End Catch

		create table #Salidas (NroObjeto Numeric(18,0),OrdenFila Numeric(18,0),Fila Varchar(max))

	/* (2do) Creamos y Recuperamos los datos de la Base */

		Begin Try
			Drop Table #Contribuyentes
		End Try
		Begin Catch
			Print 'Tabla Eliminada'
		End Catch

		Select 
			TOP 25000
				ROW_NUMBER() OVER (ORDER BY PadronAFIPId) AS NroFila,
				* 
					into #Contribuyentes
						from dbo.PadronAFIP 
							Where
								dbo.PadronAFIP.PadronAFIPDenominacion not like '%'+char(39)+'%'
							Order by PadronAFIPId

	/* (3ro) Vamos a Recorrer fila x fila armando los objetos JavaScript */

		--Select * from #Contribuyentes order by NroFila

		Declare @CantidadContribuyentes Numeric(18,0)
		Declare @Iterador Numeric(18,0)
		Declare @Salida Varchar(max)
		Declare @Item Varchar(max)
		Declare @ItemConsoleLog Varchar(max)
		Declare @ItemAgregarVector Varchar(max)

		Set @CantidadContribuyentes = (Select Count(*) from #Contribuyentes)
		Set @Iterador = 1

	
		Declare @PadronAFIPId numeric(18,0)
		Declare @PadronAFIPCUIT char(11) 
		Declare @PadronAFIPDenominacion char(30)
		Declare @PadronAFIPImpGanancias char(2)
		Declare @PadronAFIPImpIVA char(2)
		Declare @PadronAFIPMonotributo char(2)
		Declare @PadronAFIPIntegranteSoc char(1)
		Declare @PadronAFIPEmpleador char(1)
		Declare @PadronAFIPActividadMonotributo char(2)

		Set @Salida = ''
		Set @Item = ''
		set @ItemConsoleLog = ''
		Set @ItemAgregarVector = ''

		While (@Iterador <= @CantidadContribuyentes)
			begin

				Set @iterador = @iterador + 1

				Set @PadronAFIPId = (Select PadronAFIPId from #Contribuyentes Where NroFila = @Iterador)
				Set @PadronAFIPCUIT = (Select PadronAFIPCUIT from #Contribuyentes Where NroFila = @Iterador)
				Set @PadronAFIPDenominacion = (Select PadronAFIPDenominacion from #Contribuyentes Where NroFila = @Iterador)
				Set	@PadronAFIPImpGanancias = (Select PadronAFIPImpGanancias from #Contribuyentes Where NroFila = @Iterador)
				Set @PadronAFIPImpIVA = (Select PadronAFIPImpIVA from #Contribuyentes Where NroFila = @Iterador)
				Set @PadronAFIPMonotributo = (Select PadronAFIPMonotributo from #Contribuyentes Where NroFila = @Iterador)
				Set @PadronAFIPIntegranteSoc = (Select PadronAFIPIntegranteSoc from #Contribuyentes Where NroFila = @Iterador)
				Set @PadronAFIPEmpleador = (Select PadronAFIPEmpleador from #Contribuyentes Where NroFila = @Iterador)
				Set @PadronAFIPActividadMonotributo = (Select PadronAFIPImpGanancias from #Contribuyentes Where NroFila = @Iterador)
			
				--Select * from #Contribuyentes Where NroFila = @Iterador

				Set @Item = ''

				--print @iterador
				--print @PadronAFIPId
				--print @PadronAFIPCUIT
				--print @PadronAFIPDenominacion

				Set @Item = 'let Objeto' + cast(@Iterador as varchar(max)) + ' = ' +
							'{'+
								'PadronAFIPId:'+ char(39) 	+ Cast(@PadronAfipId as varchar(max)) + char(39) 
									+ 
								', PadronAFIPCUIT:'+char(39)+@PadronAFIPCUIT+char(39) 
									+ 
								',PadronAFIPDenominacion:'+ char(39) + @PadronAFIPDenominacion + char(39) 
									+ 
								',PadronAFIPImpGanancias:'+ char(39) + @PadronAFIPImpGanancias + char(39)
									+
								',PadronAFIPImpIVA:' + char(39) + @PadronAFIPImpIVA + char(39)
									+
								',PadronAFIPMonotributo:' + char(39) + @PadronAFIPMonotributo + char(39)
									+
								',PadronAFIPIntegranteSoc:' + char(39) + @PadronAFIPIntegranteSoc + char(39)
									+
								',PadronAFIPEmpleador:' + char(39) + @PadronAFIPEmpleador + char(39)
									+
								',PadronAFIPActividadMonotributo:' + char(39) + @PadronAFIPActividadMonotributo + char(39)
									+
							'};'

				Set @ItemConsoleLog = 'console.log(Objeto' + cast(@Iterador as varchar(max)) + ');'
				Set @ItemAgregarVector = 'vectorContribuyentes.push(Objeto' + cast(@Iterador as varchar(max)) + ')';


				--print @Item
				--print @ItemConsoleLog
				--print @ItemAgregarVector


				insert into #Salidas (NroObjeto,OrdenFila,Fila) values (@Iterador,1,@Item)
				--insert into #Salidas (NroObjeto,OrdenFila,Fila) values (@Iterador,2,@ItemConsoleLog)
				insert into #Salidas (NroObjeto,OrdenFila,Fila) values (@Iterador,3,@ItemAgregarVector)

			end


	Select Fila from #Salidas 
		Where Fila IS NOT NULL
			Order by 
				NroObjeto,OrdenFila












