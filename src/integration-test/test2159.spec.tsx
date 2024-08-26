
import { test, expect } from "@playwright/experimental-ct-react";
import App2159 from "../example/App2159.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2159 />);
  await expect(component).toContainText("Learn React");
});
