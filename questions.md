# Questions

## How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent close to 2 days total time on this test. If I had more time I would add react routing to create urls for sharing. I would also build the site to be more compliant to WCAG standards. Probably use some sort of prerender service to optimize for search engines. I would also build out a filters section to more visual based refinements as opposed to an input.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Since I built this app with stateless components, I had to use React Hooks. As a result I used hooks such as `useEffect` to replace the lifecycle methods used by state based components.

## How would you track down a performance issue in production? Have you ever had to do this?

I would first isolate the issue. Figure out at what point in the code base the issue was introduced. And then do a performance audit using chrome dev tools to figure out how to build a fast meaningful paint, subsequent load and offset resources that do not need to be loaded immediately.

I have had to do do performance auditing and fix associated bugs for one fo the largest wholesalers on the east coast using a similar methodology as the one described above.

## How would you improve the API that you just used?

I would include more data (I believe the API is not complete nor up to date), so that filters can be build upon those additional fields. I would also make the refinements `OR`able or at least have the option to do so.

## Please describe yourself using JSON.

    {
	  "name": {
	    "first_name": "rohan",
	    "middle_initial": "d",
	    "last_name": "bhangui"
	  },
	  "age": 24,
	  "height": {
		  "amount": 68,
		  "unit": "inches"
	  },
	  "heritage": "indian",
	  "citizen": "canada",
	  "family": [
	    {
	      "name": "karan",
	      "relation": "brother"
	    },
	    {
	      "name": "roopa",
	      "relation": "mother"
	    },
	    {
	      "name": "dev",
	      "relation": "father"
	    }
	  ],
	  "hobbies": [
	    "soccer",
	    "video games",
	    "programming",
	    "ui design"
	  ]
	}
