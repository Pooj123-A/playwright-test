
import { test, expect } from "@playwright/experimental-ct-react";
import App2420 from "../example/App2420.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2420 />);
  await expect(component).toContainText("Learn React");
});
