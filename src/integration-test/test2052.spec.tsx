
import { test, expect } from "@playwright/experimental-ct-react";
import App2052 from "../example/App2052.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2052 />);
  await expect(component).toContainText("Learn React");
});
