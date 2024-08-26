
import { test, expect } from "@playwright/experimental-ct-react";
import App253 from "../example/App253.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App253 />);
  await expect(component).toContainText("Learn React");
});
