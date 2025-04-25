import './svg/*.svg'; // 确保每个SVG文件都被导入一次。你也可以使用require.context来批量导入。例如：const req = require.context('./', false, /\.svg$/); req.keys().map(req);
