
import { test, expect } from "@playwright/experimental-ct-react";
import App2317 from "../example/App2317.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2317 />);
  await expect(component).toContainText("Learn React");
});
