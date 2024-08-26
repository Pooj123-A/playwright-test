
import { test, expect } from "@playwright/experimental-ct-react";
import App240 from "../example/App240.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App240 />);
  await expect(component).toContainText("Learn React");
});
