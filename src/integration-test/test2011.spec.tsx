
import { test, expect } from "@playwright/experimental-ct-react";
import App2011 from "../example/App2011.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2011 />);
  await expect(component).toContainText("Learn React");
});
