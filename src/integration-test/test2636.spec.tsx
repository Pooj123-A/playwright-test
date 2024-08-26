
import { test, expect } from "@playwright/experimental-ct-react";
import App2636 from "../example/App2636.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2636 />);
  await expect(component).toContainText("Learn React");
});
