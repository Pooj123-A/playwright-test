
import { test, expect } from "@playwright/experimental-ct-react";
import App927 from "./App927.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App927 />);
  await expect(component).toContainText("Learn React");
});
