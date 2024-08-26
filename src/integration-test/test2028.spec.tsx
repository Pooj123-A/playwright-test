
import { test, expect } from "@playwright/experimental-ct-react";
import App2028 from "../example/App2028.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2028 />);
  await expect(component).toContainText("Learn React");
});
