<script>
    import { onMount } from "svelte";

    function initializeCal() {
        (function (C, A, L) {
            let p = function (a, ar) {
                a.q.push(ar);
            };
            let d = C.document;
            C.Cal =
                C.Cal ||
                function () {
                    let cal = C.Cal;
                    let ar = arguments;
                    if (!cal.loaded) {
                        cal.ns = {};
                        cal.q = cal.q || [];
                        d.head.appendChild(d.createElement("script")).src = A;
                        cal.loaded = true;
                    }
                    if (ar[0] === L) {
                        const api = function () {
                            p(api, arguments);
                        };
                        const namespace = ar[1];
                        api.q = api.q || [];
                        if (typeof namespace === "string") {
                            cal.ns[namespace] = cal.ns[namespace] || api;
                            p(cal.ns[namespace], ar);
                            p(cal, ["initNamespace", namespace]);
                        } else p(cal, ar);
                        return;
                    }
                    p(cal, ar);
                };
        })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "lets-chat", { origin: "https://cal.com" });

        Cal.ns["lets-chat"]("inline", {
            elementOrSelector: "#my-cal-inline",
            config: { layout: "month_view" },
            calLink: "daniel-craig/lets-chat",
        });

        Cal.ns["lets-chat"]("ui", {
            hideEventTypeDetails: false,
            layout: "month_view",
        });
    }

    onMount(() => {
        initializeCal();
        console.log("Mount Running");
    });
</script>

<div
    style="width:100%;height:100%;overflow:scroll"
    id="my-cal-inline"
></div>
