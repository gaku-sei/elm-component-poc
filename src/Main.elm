port module Main exposing (main)

import Html exposing (program, h1, text, div, button)
import Html.Events exposing (onClick)


port increment : Int -> Cmd msg


port decrement : Int -> Cmd msg


type Msg
    = NoOp
    | Increment
    | Decrement


type alias Model =
    Int


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            model ! []

        Increment ->
            let
                newModel =
                    model + 1
            in
                newModel ! [ increment newModel ]

        Decrement ->
            let
                newModel =
                    model - 1
            in
                newModel ! [ decrement newModel ]


view : Model -> Html.Html Msg
view model =
    div []
        [ h1 [] [ text <| toString model ]
        , button [ onClick Increment ] [ text "+" ]
        , button [ onClick Decrement ] [ text "-" ]
        ]


main : Program Never Int Msg
main =
    program
        { init = ( 0, Cmd.none )
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }
