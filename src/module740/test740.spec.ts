
import { test, expect } from "@playwright/experimental-ct-react";
import App740 from "./App740.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App740 />);
  await expect(component).toContainText("Learn React");
});
