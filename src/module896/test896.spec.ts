
import { test, expect } from "@playwright/experimental-ct-react";
import App896 from "./App896.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App896 />);
  await expect(component).toContainText("Learn React");
});
