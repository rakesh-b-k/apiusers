$.get('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=full-name-asc&skip=0&limit=10&user_key=c8bac3b6cd699d99e588526175ed3db2', 
	function(data){

			
			var info = '<td>'+data.data[0].profile.first_name+'</td>'
			+'<td>'+data.data[0].profile.last_name+'</td>'+'<td>'+data.data[0].practices[0].visit_address.city+'</td>'
			+'<td>'+data.data[0].profile.gender+'</td>';

			var info1 = '<tr><td>'+data.data[1].profile.first_name+'</td>'
			+'<td>'+data.data[1].profile.last_name+'</td>'+'<td>'+data.data[1].practices[0].visit_address.city+'</td>'
			+'<td>'+data.data[1].profile.gender+'</td></tr>';


			var info2 = '<tr><td>'+data.data[2].profile.first_name+'</td>'
			+'<td>'+data.data[2].profile.last_name+'</td>'+'<td>'+data.data[2].practices[0].visit_address.city+'</td>'
			+'<td>'+data.data[2].profile.gender+'</td></tr>';

			var info3 = '<td>'+data.data[3].profile.first_name+'</td>'
			+'<td>'+data.data[3].profile.last_name+'</td>'+'<td>'+data.data[3].practices[0].visit_address.city+'</td>'
			+'<td>'+data.data[3].profile.gender+'</td>';

			var info4 = '<tr><td>'+data.data[4].profile.first_name+'</td>'
			+'<td>'+data.data[4].profile.last_name+'</td>'+'<td>'+data.data[4].practices[0].visit_address.city+'</td>'
			+'<td>'+data.data[4].profile.gender+'</td></tr>';


			var info5 = '<tr><td>'+data.data[5].profile.first_name+'</td>'
			+'<td>'+data.data[5].profile.last_name+'</td>'+'<td>'+data.data[5].practices[0].visit_address.city+'</td>'
			+'<td>'+data.data[5].profile.gender+'</td></tr>';


			var info6 = '<tr><td>'+data.data[6].profile.first_name+'</td>'
			+'<td>'+data.data[6].profile.last_name+'</td>'+'<td>'+data.data[6].practices[0].visit_address.city+'</td>'
			+'<td>'+data.data[6].profile.gender+'</td></tr>';


			var info7 = '<tr><td>'+data.data[7].profile.first_name+'</td>'
			+'<td>'+data.data[7].profile.last_name+'</td>'+'<td>'+data.data[7].practices[0].visit_address.city+'</td>'
			+'<td>'+data.data[7].profile.gender+'</td></tr>';


			var info8 = '<tr><td>'+data.data[8].profile.first_name+'</td>'
			+'<td>'+data.data[8].profile.last_name+'</td>'+'<td>'+data.data[8].practices[0].visit_address.city+'</td>'
			+'<td>'+data.data[8].profile.gender+'</td></tr>';


			var infos = [info, info1, info2, info3, info4, info5, info6, info7, info8];
			


		$('.getResults').html(infos);

		
	}
);