
import { test, expect } from "@playwright/experimental-ct-react";
import App958 from "./App958.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App958 />);
  await expect(component).toContainText("Learn React");
});
