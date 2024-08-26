
import { test, expect } from "@playwright/experimental-ct-react";
import App2241 from "../example/App2241.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2241 />);
  await expect(component).toContainText("Learn React");
});
