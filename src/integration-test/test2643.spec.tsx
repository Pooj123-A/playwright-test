
import { test, expect } from "@playwright/experimental-ct-react";
import App2643 from "../example/App2643.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2643 />);
  await expect(component).toContainText("Learn React");
});
