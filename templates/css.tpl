:root {
<% _.forEach(paramCased, function(hex, name) {
%>  --color-<%= name %>: <%= hex %>;
<% }) %>}
