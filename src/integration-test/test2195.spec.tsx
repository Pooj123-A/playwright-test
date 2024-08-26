
import { test, expect } from "@playwright/experimental-ct-react";
import App2195 from "../example/App2195.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2195 />);
  await expect(component).toContainText("Learn React");
});
