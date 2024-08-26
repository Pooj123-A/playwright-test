
import { test, expect } from "@playwright/experimental-ct-react";
import App973 from "../example/App973.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App973 />);
  await expect(component).toContainText("Learn React");
});
