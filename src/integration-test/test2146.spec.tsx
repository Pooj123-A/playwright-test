
import { test, expect } from "@playwright/experimental-ct-react";
import App2146 from "../example/App2146.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2146 />);
  await expect(component).toContainText("Learn React");
});
