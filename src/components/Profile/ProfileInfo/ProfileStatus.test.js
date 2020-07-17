import { create } from "react-test-renderer";
import React from "react";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusComponent", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-Kamasutra.com" />);
        const instance = component.getInstance();
        let span=instance.findByType("span");
        expect(instance.state.status).toBe("it-Kamasutra.com");
    });
    test("after creation input should be display ", () => {
        const component = create(<ProfileStatus status="it-Kamasutra.com" />);
        const instance = component.root;
        expect(()=>{
            let input =instance.findByType("input");
        }).toThrow();
    });

    test("after creation span should be display ", () => {
        const component = create(<ProfileStatus status="it-Kamasutra.com" />);
        const instance = component.root;
        let span=instance.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation span should be display with correct status ", () => {
        const component = create(<ProfileStatus status="it-Kamasutra.com" />);
        const instance = component.root;
        let span=instance.findByType("span");
        expect(span.children[0]).toBe("it-Kamasutra.com");
    });

    test("input should be displayed in editModeinsted of span", () => {
        const component = create(<ProfileStatus status="it-Kamasutra.com" />);
        const instance = component.root;
        let span=instance.findByType("span");
        span.props.onDoubleClick();
        let input=instance.findByType("input");
        expect(input.props.value).toBe("it-Kamasutra.com");
    });

    test("callback should be called", () => {
        const mockCallback=jest.fn();
        const component = create(<ProfileStatus status="it-Kamasutra.com" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

