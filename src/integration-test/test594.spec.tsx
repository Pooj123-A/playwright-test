
import { test, expect } from "@playwright/experimental-ct-react";
import App594 from "../example/App594.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App594 />);
  await expect(component).toContainText("Learn React");
});
