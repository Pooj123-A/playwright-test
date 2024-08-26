
import { test, expect } from "@playwright/experimental-ct-react";
import App2942 from "../example/App2942.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2942 />);
  await expect(component).toContainText("Learn React");
});
