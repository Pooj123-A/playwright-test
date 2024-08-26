
import { test, expect } from "@playwright/experimental-ct-react";
import App1942 from "../example/App1942.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1942 />);
  await expect(component).toContainText("Learn React");
});
