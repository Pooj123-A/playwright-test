
import { test, expect } from "@playwright/experimental-ct-react";
import App653 from "../example/App653.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App653 />);
  await expect(component).toContainText("Learn React");
});
