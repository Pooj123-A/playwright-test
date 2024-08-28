
import { test, expect } from "@playwright/experimental-ct-react";
import App387 from "./App387.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App387 />);
  await expect(component).toContainText("Learn React");
});
