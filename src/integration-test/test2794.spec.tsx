
import { test, expect } from "@playwright/experimental-ct-react";
import App2794 from "../example/App2794.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2794 />);
  await expect(component).toContainText("Learn React");
});
