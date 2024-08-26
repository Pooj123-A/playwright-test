
import { test, expect } from "@playwright/experimental-ct-react";
import App2525 from "../example/App2525.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2525 />);
  await expect(component).toContainText("Learn React");
});
