
import { test, expect } from "@playwright/experimental-ct-react";
import App338 from "./App338.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App338 />);
  await expect(component).toContainText("Learn React");
});
