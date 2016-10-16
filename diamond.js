  const spaces = function spaces(count) {
	      let space = " ";
	      for (let i = 1; i < count; i++) {
	          space += " ";
	      };
	      return space;
	  };

	  const stars = function stars(count) {
	      let star = "*";
	      for (let j = 1; j < count; j++) {
	          star += "*";
	      };
	      return star;
	  };


	  const diamond = function diamond(n) {
	      if (n % 2 === 0) {
	          n = n + 1;
	      }
	      let spcount = n - 1,
	          stcount = 1;
	      const counter = (n + 1) / 2;
	      for (let x = 1; x <= counter; x++) {
	          console.log(spaces(spcount) + stars(stcount));
	          spcount = spcount - 1;
	          stcount = stcount + 2;
	          if (x === counter) {
	              let stcountrev = stcount - 2,
	                  spcountrev = spcount + 1;;
	              for (let a = counter; a < n; a++) {
	                  spcountrev = spcountrev + 1;
	                  stcountrev = stcountrev - 2;
	                  console.log(spaces(spcountrev) + stars(stcountrev));
	              };
	          }

	      };
	  };

	  diamond(10);
