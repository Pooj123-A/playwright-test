
import { test, expect } from "@playwright/experimental-ct-react";
import App2541 from "../example/App2541.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2541 />);
  await expect(component).toContainText("Learn React");
});
