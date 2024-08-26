
import { test, expect } from "@playwright/experimental-ct-react";
import App2041 from "../example/App2041.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2041 />);
  await expect(component).toContainText("Learn React");
});
