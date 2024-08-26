
import { test, expect } from "@playwright/experimental-ct-react";
import App2451 from "../example/App2451.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2451 />);
  await expect(component).toContainText("Learn React");
});
