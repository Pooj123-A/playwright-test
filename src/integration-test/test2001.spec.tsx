
import { test, expect } from "@playwright/experimental-ct-react";
import App2001 from "../example/App2001.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2001 />);
  await expect(component).toContainText("Learn React");
});
