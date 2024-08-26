
import { test, expect } from "@playwright/experimental-ct-react";
import App905 from "../example/App905.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App905 />);
  await expect(component).toContainText("Learn React");
});
