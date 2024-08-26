
import { test, expect } from "@playwright/experimental-ct-react";
import App2964 from "../example/App2964.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2964 />);
  await expect(component).toContainText("Learn React");
});
