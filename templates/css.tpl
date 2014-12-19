:root {
<% _.forEach(colors, function(hex, name) {
%>  --color-<%= name %>: <%= hex %>;
<% }) %>}

