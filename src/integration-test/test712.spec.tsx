
import { test, expect } from "@playwright/experimental-ct-react";
import App712 from "../example/App712.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App712 />);
  await expect(component).toContainText("Learn React");
});
