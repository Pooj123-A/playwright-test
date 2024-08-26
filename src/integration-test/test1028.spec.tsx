
import { test, expect } from "@playwright/experimental-ct-react";
import App1028 from "../example/App1028.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1028 />);
  await expect(component).toContainText("Learn React");
});
