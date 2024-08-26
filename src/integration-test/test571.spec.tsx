
import { test, expect } from "@playwright/experimental-ct-react";
import App571 from "../example/App571.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App571 />);
  await expect(component).toContainText("Learn React");
});
