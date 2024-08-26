
import { test, expect } from "@playwright/experimental-ct-react";
import App2983 from "../example/App2983.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2983 />);
  await expect(component).toContainText("Learn React");
});
