
import { test, expect } from "@playwright/experimental-ct-react";
import App828 from "../example/App828.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App828 />);
  await expect(component).toContainText("Learn React");
});
