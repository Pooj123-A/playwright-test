
import { test, expect } from "@playwright/experimental-ct-react";
import App610 from "../example/App610.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App610 />);
  await expect(component).toContainText("Learn React");
});
