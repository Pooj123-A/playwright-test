
import { test, expect } from "@playwright/experimental-ct-react";
import App1448 from "../example/App1448.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1448 />);
  await expect(component).toContainText("Learn React");
});
