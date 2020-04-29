function adMove(banner_name)
{					
	var banner_system_name = "banner_container_" + banner_name;
	var banner_data_name = "banner_data_" + banner_name;
					
	banner_system = document.getElementById(banner_system_name);
	banner_data = document.getElementById(banner_data_name);
													
	banner_system.appendChild(banner_data);
	banner_data.style.visibility = 'visible';				
	banner_system.style.display = "block";	
}