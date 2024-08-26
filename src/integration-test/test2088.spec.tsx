
import { test, expect } from "@playwright/experimental-ct-react";
import App2088 from "../example/App2088.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2088 />);
  await expect(component).toContainText("Learn React");
});
