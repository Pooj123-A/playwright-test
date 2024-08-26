
import { test, expect } from "@playwright/experimental-ct-react";
import App2869 from "../example/App2869.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2869 />);
  await expect(component).toContainText("Learn React");
});
