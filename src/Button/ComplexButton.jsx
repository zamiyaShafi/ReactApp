import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8gxHhvJ8wgeBxDRkwcPTOmTWhGHIz6zYzA&usqp=CAU',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRYVFRUYGBgYGRgYGBkZGBgYGBgSGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NjEBDAwMEA8QHhISHzQrJCsxNDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBFAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwEGB//EADcQAAEDAwMCBAMIAgIDAQEAAAEAAhEDITEEEkFRYQUicYEykaEGE0KxwdHh8BTxUmJygqLSFv/EABoBAAMBAQEBAAAAAAAAAAAAAAIDBAEABQb/xAAqEQACAgICAgEDAwUBAAAAAAAAAQIRAyESMQRBEyJRYTJx0SNCgZGxFP/aAAwDAQACEQMRAD8A8VoA5OGNMITQU02ayy+ghGkfO553IE3uUJKMbSWgooxPJCl+5c2kps7TrI0FlBLIhcKajqaYCiu/46zid8gkq0yFRgTerp0G7SkGyxxHRyJo5SpogU1KIRMBEkLlJ2DfdqClCIKpuWmcmUM9Vi+mcooKOauZyk0W0tYDKMOqEJW5igYVnI50Fv8AEIwFwa5YfdKpprrO+k7W15OEKHOJlEOpANLjwJ+S89rPEnOOwt2FhO69jHN/aB35S5TSaTKcGJ5P09ex+7xFjR5iCegv9cBBVPFpwwXxMk8jHskjSSCYxBHEA2HrO4fILQjPEfQi35lGtlkfExx7VjKnr2zwB2N+ODn+CnGmcHNBBkHleTeOkAE4nH6xePZE6TVvpulkhstkHBBEny9cmxwuQObxYyX06Z6gU1YtWWi1rardwseW9D+yIc4BMo8qUZRlTQDqWKtBq3rOCxZZYxqeqNKiCrMRhesXhY9nRbQsfQWTNOmTmqraaDih6yOgT/HURsBcXcUdzYVoQmjDZJadTaihqwiXRLki5OxkCtWpbS1EphSNkQiUWi5CrtWi6AhAszaxXDFo0K4C0xsGfRQr6QTF5S7V1IWhwbbBKgAWP3yw1GoQgrIHKiyONtDF1VRjpS4VJTDShanZ0ocUFMYtdisXta0ucQGtEkngLz2q8ec53k8jf/ojqenoFqVsDFhnleuvuPHMVmsXnhqnOzz8u/5oinqSIO6/J98lH8X5KX4Uq7HZalGr8Xa0kMbui0zAm+OThDa/xF7xtBjIMZJEZ7Zt6paxgkg+3rxuj3+azjXYzD4dbnv8DF/iVR4cwhjQdoJAdO14mfkkrhuqOJ6xJzYAH8kbs2gmQZEkAXDjIA7fysGae2b/ANuhcOT6LYRjBVFUXZJsXEhxaHAmNzbEbjfp7Kz2lwL3Ey68n8RETec3XabG4guJBFhMOmBYET/OETR0phu8gNbMNm/mN56Xj+EajQVgVrmJMcn8W7Pe3plZlpjsT6iwv7iUTsa3MuMD/rmP3XW6qI2saPbocEnOCtcUdZ3QVHMcDBjniW/sNpTf/LJSdmoe+wkmD8vxW9wp/lOzunORM3mT7oJP7E+XApu/Y3++lTel9LVAmMHjuOPeCEQ1yXb9kcsTg6YSHqpcqhyhK2wKISqufCq4rF7ljYcY2ab1ENJXEPIPgECopKyYFrC6zGkg3RuTrTOsvP0HQm+lqJkXaJM8fYzarBUpmQrrSRlgrgrIuhcNRcZR2sEn17TBTbfKF1DAVoyEuLPKOaZuqFpTjUacTKHdRSXE9GOVMBYSmelesBQWzKcIoJgzkpIU+Kax1QuE+UfC0Y9T3shWtybQOAeTYRKJ1NLzuGCOOb9JyEOLG/ER3Ii0KlJI9LGkoJRCKLMdImeg6nv2W9QEWGJDTfJmZnpYXUosIaC6fMAY/wCu7M9zIVmsHwkCczg2BG3pF1rYYO1ki4uXZkdIIIzyD81oykMXAi0x8XMnn+UXQ083gDA81ySeg9/p6rr/ALkWcXH0t9M/0rKvs6xfWO6Q23Md85VKGnLzAt1P9ybFHMfStDP/AKP1K0p1GYayPxHzH8IJ69vqia0dZX71jGwwXIIc45OI9ADJt0juhX1C8meGu6SQ0FwnqbQiX6UESHQA0u80CZdG2RBPIvOEM+LRM7fN0kE49o+ZQWcZNpglvmj/AJW+Hv06D2wsWNcYG2YkRjguInHDj7c4RDy3B7ExeTNxM9z8gsXG05vf88e59PdC02EcbTMNMmHBwkcgDF4kTE+/ZUpMLnAA56mBYSbm3+1ZrzIIJBxODnt6/muPaIvkxHEADoR6fJA4s4zdVu1wvAbFouBEeUg2jNiUVpdYDDXTIAvFjMD2znFkPvII2/hcXAkAnjIMgxHTkrCobRNhHPNgQOyCUWgZRUlTPQtCtCy8NeXsl3xAlp9evyWz2rDy5LjJxYPUKGcZRLhK42kuqw4tIxDF1Fikot4Gc0VbThWDVxlRaALKBbfsrCK0z4WIatGsRIXJ2qG9Goi2vSei+EYyvZGSyib13oD/ACbrmorIZglY2FGGtjGlXVnvQjWq5JXWY4qytRsrL7tbNWzWLmguVAYpLUU0N4n4myjb4nZ29B1ceF51/jNZxncB22tt6SF2kU4vGnkXLpHqHaZrrlrXEYMAwlHi2mDS1zQJJxwe8IWhqn53uuACZJMgRf2V6lQktcwEltw5xtIvg2Toxa3ZXi8ecJXytBrLjNwJg2ENkix4sFRj2SBM5sfkMi+EFqK0khp8vAJ/aAuNowOBaC44EGZBRUVE1BeXEAkQ6L2ifywpSoEm97EfmJ+d1VtZuQRY54mRgcq4qbhjaCREm989Lc2C5NM1jFmmp2L3cCWtx5QLzgT0Wv3lBkH7uWkO5I3e/r+SX1rOftJjDYcCTiZgCR7LjadiBBJAMyBYEyPWYW0DQYK1EiNnQTudMdMoetpwTDHnZg280wCRIyLDKGFEnqDMKzaTuD0+nddSCNW6WmMkn3j5fyrO0NI4c9vu0jtxfn6IZ1V45/YnuuGsRloiYkCJ5/ZY0jgyj4SwkA1DBIiGCfbzevyWGp8Nc0Sx4eIkiIcAc26Yx2Vm1A8EhwBkWNpkHpb8IVPvC1ocHXkyLy2CNto6g3BPGIuLR1i9w4sCL4MzIssazRAh0yATxDuR/KY16jXfEJP/AC5EEiO/v0Q2vohhAAiwBmJ3j4jA4S5IIY/Zx0te2TALTGBuO4THpHyTKqxBfZmmRTe7guEW5Db3/wDaEdWqQlejyc7vM6A6jYXKblnXrhDsr3WKSsJQbQ2CiwZUsoj5C+LF+lqSmdJItM6EyZXslReh+aG9DAFXDwlv+SrisjsQ8bDX1FgdSQhn1Vyk0ldYSxpLYax5KMosWGmpphTYiRPOSXRRVeUQ5iGrBaLWyNepq9aKbC/Jw0dXHCWamsWpVrdU55GYA+p/oWppuivF4/OSvoCrS9xc4y4kk+pUYxGaPRF5FiGkTuixvFpzeyfabw6lSaXkbzcAuB2zFgBBgz2RcUtnq2loVUabWAb2u3dLiLeUEdZkkEgwFzYCG5nb5pwZmNpnofotNSCZ3NmS4yHSSZyY8sSTYBVxgcSebxJ/dHGVoyju2JJgSb4E/olevrOdg7Wjvk8k+qMe0m7rxfNv7dK64c90DA5S8sm1SCigigIAGbR6cg/U/NF7SbktsLYkjgdz/eUGPDawHl83YG89pWH+PV3bS10ngj9EpSlH0zdP2NP8lrQCSObAgm3bKu3xYRZhJzJIFvrCHoeGho89o6XOfojabGNHw+W13Hpj0Cojze3ox0DVfGniSKbBHUumesWVNN4+SYdTEdWk7gB62lbVvFqLbCmHRyQI9tyHZrKbpLGhp9AFPbc6U/8ABvroZNqseJFu0jj80NXpXtdDPrHqVd1V07XfEQCM2m4AHUiFVzRlFST+no2ZIHa+Fs94cLcAB18uBIBIz8uy5Tcx1iSD6kyenZYvpvYZiwnzAz84x7gJcm30aR9jb2vYDIuuOpgi54m02uRef7dcBtzb6HhScg9D0JgE3nrZCzh74RVa2nskEtJJI53GZ+seyE8R1EYSynWLbz6/6+aH12oJ90jM+MbRJ/5v6jl9yVtUpp68lLXPRGlN150crlIpeNKJ6bTu8oUVNM/yhRX2QUxabLn3pRVRiHFO6xxY9STL0QSj2Uys9OxHMamxiJnIzZQRNOktabVq1qJIlnNmlNsIlhQzVu1ETSNljVYtWldIlcCnQh8QoyClun0m4zkBxaQDB+GW8R/or0WuYA0k8BKTXYDMODS6TBBcPJAG4EAyd0iBx7nCO7PV8RuUWE06gpjbLgNvltntE2buDlnW1wcXNebOk+X4S+1hiPXrEpe7U8/Fe7TOBg9viOEu1FUxn+lMlJJFqjY6a03IsOT7z6HC5VYXb4A2sgOM3EuyLwTAIlY6NrgxrARufmXAAc7T0wOVmHmDFjsMRyD8QdfJBI9Bi5KBy1o0E1lcl20NG4zuGAJnvaJR9DSztJbG5sg/8urvW+Et0tPc9xc4AkGdziNxPccyR2svT+FUG7YdTD+WuMEDIJ+liJyV2K9tnSdGzKBiT0AAgEADuAD1SvV6gNcS218gzERET6ph4nUaxot53QN5Js0WOMCDiMledq6hrZLhuccAESJ5NuAPqmSkkrYKRtqdQGbXOIcSJgTIdJlpkCOOqUavUPqfEbDAGBaP0WxaXuJAu42E8R1sEbpPDnvDtjWnbBMuAN5ET7FTTjPLq6QxVET0W7rHIx3C4+kRcJhU0LwdzRBEm8WjIWjae8Axci4vYni/9uEleP8A2y79M3l7FjdUeURR1USdxEjpN5B9sLPUUP77/wAoJ0gwp8ksmJ1LaCSTG9HUzYnreLw6AQeogfVGUq5B+v1jCQ0nwmlN3lknzTESLAyZjOQcKnBl5IGSoJrUxG5kRkjkXOO1vZCEx/eEWyp+IWmQY4Jktn/r/wDlC6qAbYN/neFQ5KjDN2Pf3/1+yyic45UDp5XSlOmaL6jIJHRaad11bVsuD1/NYNMFePNfHkaD7R6ChWsoltOtZRU/MiX4RvUcsgVZzlQFWiUtBdJyNpOSxjkVRqIkxc4jWkiGtQ2mdKLlGQz0yNC1YFRq1C0TIs1ahZtC2YFgLEH2k1O3YwAEulxnoLD9fkvPOqzFgIEetyZPzTL7Qsc/U7Bna2B7F37pK0o1Kke74sFHEv2s2NQgAA3BkHvbn2CrpmbnbnYb9XdP1+SzqvE+U8mJF44lE0PgF/NOINwZMz8hHdY3b2UhhAIE2cPOTY7muDdsN28ep5ssq7STu+EcAE2MBtxMzAHzVqLA0uBcCC1plsOG4iQCQZHIPQi46bvY0wBYCblwMjI9DECOqOMbdsEX6ekDUgbuoIaSQ0A5aPb0XqNE5rKe5x2tA3FxxAN+PaOqQeGFn35a7f5mkDaGuvEAEEYJOf8AYE8e1xcBTafI3PG53BPbolZcnCLaOpuVFvE/GzWf5BHDS6DYGcYkoJlB2SDcuExYm0gHnKp4fpyZImW3BA3Q78M9BPP54XqKWgdu+9qFjYbJO0BkEEc2/oSMClkXKb/gKTUdIX6PST9DHWP9+0hM26DMSBfn5CQsGeKUmbWsa6oQDHDb8CRPThaP0tfUAFzmhpE7GmNoONzc8jPUK1SXoF2DavXUmCGj7wjIBhvu4fok1Kq5r3OeCN5JE2AO7qRcWIXpaP2fGM47XgT17pP4/Sawik27yQ53JaLw097zHYKbyE/1XtdL8hRa6MdS0THb9f4SuuzzJiHeRs5AMmALce8Ib7vdLkORfLBa2atGDaa3iwAtkzJM4gRxz81syl/ewv8AutA0tPQjmx6g9jYrYYOKObsxY8g2wr6mS1htcfQk3+YKIqaUtax5ILXgxBuNroMjPTIHbCz1e7aySDBc1sR8IybcEkn3Wyi6qzE76BmhRxhQLhXejQfUZQ5CMrUjG7qhHLyM9ubbCi7Ob1FxRIthjtj1eVg0qwK9dSImjXcrMq3WUqhK5yM42PNNqUxpVZXmaTyE40j0+MrI82JLY6prZoQ+nci2BGQSLNatmNVWtXBVhYL7PK/bOjD2ugeYbT6tmI9ifovOsXqvtcC5jSMNMnrcQPzXmKJAInEiR1E3WLcj3vEleFfg3dRaWF7XBpbtBaSNznGZLW9MLu2ABczcG4Edh/cKa4s3uLGnacSZ9YXHVy4AGBtG0f8Aj073JPum6uh6sM0UtIfAMXAddpI8uJvnjC0c9oaZJDrRtjYW/iBvOYjOFnTe112+XYxrSC4Hc4zuLe18d1xzZDjBG0S436wMDykyBflNj0d+5hp/jL5IsWx1kY785shiwbg5zog7pkAyLj9EZQaXboBIb5nOA4wLepJ/0hddSFxM+hBBObfT6pM4ri3VhJlqniztzntIe9xJc9zW3LvitEFDajxBz3A1nueMwCIB7D4R7BC1NMQViWkH1XmZMmVev4DSj6Gp8XawRSpAHG9xDz1s2IB+aAZq3h5eHuDjcuDiHSf+2VhsUc1JeTJLbfQSSGNbxPUP+Ks8/wDuQI9lRjNm3dyZM9xY9x+6CY0zCYVaBgOcQTIAi4iJmZ+ipwpzuVO19wXrRhUf+EY5KZaekLAghpIBMEwTf5xdL2aYz/STKZaeo6GsLvLO4AwBudAkk/mVZgUrbkgJfgs+g3G8T55DgQBtHlucudJssw0xMWnMWnMfkjawadg8rN/mL37Y3NkEAtmG4zyl7n25jMd/RUypGIuBAmwm02Mubf2sR8kNVdJ/uFpWqXvcwIIiPhEfT6oRzlNOSNSLkqouQOq4CThQtIU88tHN0Mn07dUq1NCLhHabUTYrupalzjHJGxUW4ypiVRbvpXXVB8cinkg4FdBVFJV3Imo1ldDVmwrcIo7BejrQjdPUhBhXDk2LoVNWeh0teU20xleS0VeHQV6fR1BCdGXJHnZ8fFjB5gJbq6sIurWELz3ilczAK16QvDDk6K67VFzXN6ghebbY34TU9UHqKYJke6FS3s9bBUPpIzTl2HA+UuzEdkOwyQDaSL9FpqmQ47fhtBF+OqEqGEc5JFS2OdJQkVCxwdsvHluJ5M9JuJuFjXeNpsTbOIuJPf8AlKqVaCJMCb/uj2Vci92xabm0TfCLHlUlo5po28Pe3cQ4uiC3yAOMO3QADY+YhVrOnJkkwTJJgDvx+yy0boLgLkgNFpz06HutxT3F0QIBdctadrY6mC7sEUXaOfZWiPvN24y5v/I5ZEC55FhCF1OnBtjorVXFjmubMj5EdESNVTfeQ08tccH1OUD4O4y7/wCm79CogA7XWPXgrrqQ6/kmDtEaplsO/wDEi2fYLOnQaG/Dg/EDf0j2yk/A7p1Xpm8itGmTFpdMRBm159OM9Vs9u4joMD17q1Elrg5joMEkgkFsggtk8xa3VaadvPX81TCHoGzB7YIPS/1V9OQCS5u4Q4ATtuQdpxwbrjvM+AR0uYE9ytyGEt2NcPI0OkgzUvuIjjCL3o5mWseQ1sAWkfCATuEyYz2S9zHnhMteNoY0gg3dcR5fwkHmb/JB1Kn5fVKypN7ZsTANIyu0dOXGTYLbTmXScD69iit91JKn0wJza0ijaIAgBZVGIqVR4QSSEqTsXPEK7a02KlYIVzlPKTi9FCXJBO1RYCsot5x+5tMNhVhakLm1MaEpnGhaAqsKBEnRj2agrheqSqytcjKNQ9NdBrzhJmtkwvReF6NkTym4bb0Iz8VHYa17nBJfEWkOuvSspwgPENBvVMo2iPFkUZb6PO1CSFmKDjhPqfhowj6WhaBhIeFt7ZQ/JjHo89p/DnuEcdEypfZ9p+IJwza1CazxcMwZTUoxWxXz5Juonaf2cogeZoKQeKaJtB7jJDSWlgbeQT5gD+EgdUVU+0jjYBcZQfqATuIMGOxhZGUW/pKccpxdzejz9N5a6Rg2PoU0dBDQGtaWtgkE+Yib3MT6JRq6DmOLXCCP7Y8ojw/Wt8rXACLBwmSZmHX9gshmjGXGXsvq1aCH0iQ4xgCcWkwEuqaXlOBRaRJde8Nvu7O6bchFt0rmeR4cxrh5jt+JubC8x+qonijPTMUqFtDw2p9394G+UC945OBzF7KU3WuAbHPQ8jumH+K5ocxlV7WO6tIkRMlub9kC6vW2uaSwANDRLRu27p8nQyuS4rSMtsrqXzAgAgBtgB5WgAExkzN1H1tje/Edf0WNKmQC50nqe88/NZuO4rHJ1+WElWiULFpcNwBkjhxzBPdGMqhri4iBLiQCRGbA5WDXkANm07rmwtFwpT0jqjSAYE37x/tC5cY67BbS3ICr6xz3bnEmwaJMw0YaOy7Rpl57cnsm+m8DaLuKvr9rW7WiFHxm1cmLfkRb4xFtWoBYCAFRr1kVyUhy2EoqgxtRcc9Ch6qai7mZwLVnIR5Wr3rIhT5HbHRVFFFFEqho+cxULFusnFenJI89NldqqQtQuPQtGpmS4uOKrKCw0i7RJhP9Dua0QlWg05cbr0VGltA6KnBF9knkzX6Qyg8kLT7soIa1rTEol2qaRlVnnuMl6LNprlSoGjKHfqgBYhJdbVe45slymojIYnJ7C9ZrJmCkGocXFaOe4mEfptCSpZNzei6KjiQLo9DMSmNfVmg2yNp0AwbivP8AjWrDzA901r44X7Bg3lnvoX63Umq4lx9ECWQt9q6acqB3J2+z0YtRVIo3VPAgO/I/VEM8Yrggue54FoedwjkAm49kM9gHWVlC2UskWqb/ANjEkx877RB0zTIwB53O2tGAN3ClLxSgSd4fG0xtAnfxzhIIXQ1Mj5eZaszgjavXc7J9uB7Jnp/F9lA0SwGbh3Q9TySgNPQnpic8KFoJnhHFzVzb2zHXRoa5dENiMn9k10VaBCVNI4st6T4WRyycrk7J8q5Kh06tZA6m642qqudKdKVomjDiwN7EO8oyog6gUmRFcWYly4XLj1yVK5D0gnSUd5AXqtP9n27ZjK8r4dX2PB4X0fQVQ9gI6L0fEjCUbrZB5c5waroR/wD883oonz3XUVfxw+xH88/ueJc6yxLlFFHIuid3qrnqKJbbDozaZML0/h3h7C0SJUUVPjJNOyfym1FUA+Iv2Pa1oi6c0qssAKiibD9TJ8q+iIs1GkkzKyc13VRRFIKLtbB3bhyuNa4mAVFFNLscMdPogLlMaLcQoonwSI5tsA8e1cNLQvKOcuqKbyW+R6HipKBWVZrl1RTlLNmwchVdp2niFFExgW10Zf4zepVnBsRCiiB6CTbM3OWe5RRIk2Gi7HLVrlFEcWDI3a9X3qKKhCWUc5DVF1RBIOAK8KhUUUcuyhFV6z7NeJH4SuKKrxG1NifJinB2elMm6iii9U8Y/9k=',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusbcCzOoX-5Ohu5NlPlicGu8Dlip1Ijio0A&usqp=CAU',
    title: 'Camera',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}